import axios from "axios";
import { Component } from "react";
import NewsList from './components/newsList/NewsList'
import { Vortex } from "react-loader-spinner";


class App extends Component {
state = {
    news: [],
    isLoading: false,
};

    async componentDidMount() {
        this.setState({isLoading: true})
        const fetch = await axios.get("https://hn.algolia.com/api/v1/search");
        const data = fetch.data.hits;
        this.setState({news: data, isLoading: false});
    }

  render() {
    const {news, isLoading} = this.state;
    return (
        <>
           {isLoading === true  ? <Vortex
  visible={true}
  height="80"
  width="80"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
/> : <NewsList  data={news} /> }
        </>
    )
  }
}

export default App;
``