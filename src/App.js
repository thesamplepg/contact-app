import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./App.scss";
import { getContacts } from "./store/actions/contacts";
import AddContactAddress from "./containers/AddContactAddress";
import PlusButton from "./components/UI/PlusButton";
import ContactAddress from "./containers/ContactAddresses";
import Loader from "./components/UI/Loader";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    isFormOpen: false
  };

  componentDidMount() {
    this.props.getContacts();

    document.addEventListener("click", () => {
      this.setState({ isFormOpen: false });
    });
  }

  toggleForm = () => {
    this.setState(prevState => ({ isFormOpen: !prevState.isFormOpen }));
  };

  render() {
    if (!this.props.loading) {
      return (
        <React.Fragment>
          <main
            className={classes.Main}
            onClick={e => e.nativeEvent.stopImmediatePropagation()}
          >
            <PlusButton openForm={this.toggleForm} />
            <AddContactAddress
              close={this.toggleForm}
              isOpen={this.state.isFormOpen}
            />
            <ContactAddress />
          </main>
          <Footer />
        </React.Fragment>
      );
    }

    return <Loader />;
  }
}

export default connect(
  state => ({
    loading: state.loading
  }),
  { getContacts }
)(App);
