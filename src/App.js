import React from "react";
import ListWrapper from "./components/ListWrapper/ListWrapper";
import "./index.css";
import Form from "./components/Form/Form";
import styles from "./App.module.scss";

const initialStateItems = [
  {
    image: "https://learnreduxwithdanabramov.com/static/dan-abramov-photo.png",
    name: "Dan Abramov",
    description: "Working on @reactjs. The demo guy.",
    twitterLink: "https://twitter.com/dan_abramov",
  },
  {
    image:
      "https://pbs.twimg.com/profile_images/1257111841508974592/2_rEXazl_400x400.jpg",
    name: "Ryan Florence",
    description:
      "Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.",
    twitterLink: "https://twitter.com/ryanflorence",
  },
  {
    image:
      "https://pbs.twimg.com/profile_images/1095819845382299649/zG-2_UHS.jpg",
    name: "Michael Jackson",
    description:
      "Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.",
    twitterLink: "https://twitter.com/mjackson",
  },
  {
    image:
      "https://avatars3.githubusercontent.com/u/1500684?s=460&u=1c014810361080e75ad80cdb8577ced97da65b11&v=4",
    name: "Kent C. Dodds",
    description:
      "Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS",
    twitterLink: "https://twitter.com/kentcdodds",
  },
];

class App extends React.Component {
  state = {
    items: [...initialStateItems],
  };

  addItem = (e) => {
    e.preventDefault();
    const newTwitterAccount = {
      name: e.target[0].value,
      twitterLink: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value,
    };
    console.log(e.target[0].value);
    this.setState((prevState) => ({
      items: [...prevState.items, newTwitterAccount],
    }));

    e.target.reset();
  };

  render() {
    return (
      <div className={styles.row}>
        <ListWrapper items={this.state.items} />
        <Form submitFn={this.addItem} />
      </div>
    );
  }
}

export default App;
