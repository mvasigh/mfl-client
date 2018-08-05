import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class App extends React.Component {
  state = {
    standings: []
  };

  componentDidMount() {
    this.fetchStandings();
  }

  fetchStandings() {
    axios
      .get(
        'https://www62.myfantasyleague.com/2018/export?TYPE=leagueStandings&L=35808&JSON=1'
      )
      .then(response => {
        this.setState({ standings: response.data.leagueStandings.franchise });
      });
  }

  renderStandings() {
    return this.state.standings.map(team => (
      <Text>
        {team.id}-{team.bbidspent}
      </Text>
    ));
  }

  render() {
    return <View>{this.renderStandings()}</View>;
  }
}
