import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader/Loader';

import * as API from '../services/api';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    items: [],
    showMore: false,
    showLoding: false,
    notify: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.fetchData(query, page);
    }
  }

  fetchData = async (query, page) => {
    if (query === '') return;

    try {
      this.setState({
        showLoding: true,
      });
      const response = await API.getImages(query, page);

      if (page === 1) {
        this.setState({
          items: response.hits,
          showMore: true,
          showLoding: false,
          notify: false,
        });
      } else {
        this.setState(prevState => {
          return {
            items: [...prevState.items, ...response.hits],
            showMore: true,
            showLoding: false,
            notify: false,
          };
        });
      }
      if (response.hits.length === 0) {
        this.setState({
          showMore: false,
          notify: true,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  handleInput = e => {
    const inputValue = e.query;
    this.setState(prevState => {
      if (prevState.query === inputValue) {
        return;
      } else {
        return {
          page: 1,
          query: inputValue,
          items: [],
          showMore: false,
        };
      }
    });
  };

  handleOnClick = async event => {
    this.setState(prevState => {
      return { page: prevState.page + 1, showLoding: false };
    });
  };

  render() {
    const { items, notify, showMore, showLoding } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleInput} />

        {notify && <strong>Nothing found</strong>}

        {showLoding && <Loader />}

        {items.length !== 0 && <ImageGallery items={items} />}

        <div className="ButtonBlock">
          {showMore && (
            <Button
              loadMore
              onClick={this.handleOnClick}
              type="button"
              title="Load more"
            />
          )}
        </div>
      </div>
    );
  }
}
