import React from 'react';
import { connect } from 'react-redux';
import RoundSelector from './RoundSelector.jsx';
import RoundSelectMob from './RoundSelectMob.jsx';
import { TipsGamePanel } from './TipsGamePanel.jsx';
import TipsUserTipPanel from './TipsUserTipPanel.jsx';
import { TipsDataPanel } from './TipsDataPanel.jsx';

// import { firebaseRef } from '../api/firebase/index.js';
import { filterGames } from '../actions/game-actions.js';
import { getTip, getTipTotals } from '../actions/tip-actions.js';
import { setRoundNum } from '../actions/roundNum-actions.js';

import '../css/tips.css';

export class Tips extends React.Component {

  constructor() {
    super();
    // this.state = {games: [], tips: {} };
    // this.leaderboard = [];
    //this.getGamePanels = this.getGamePanels.bind(this);
    // this.loadGames();
    this.listUsers = this.listUsers.bind(this);
    this.getGamePanels = this.getGamePanels.bind(this);
    this.getUserTipPanels = this.getUserTipPanels.bind(this);
    this.getTipCountPanel = this.getTipCountPanel.bind(this);
    // this.handleGamePanelClick = this.handleGamePanelClick.bind(this);
  }

  // componentWillUnmount () {
  //   var gamesRef = firebaseRef.child(`/games`);
  //   gamesRef.off('value');
  // }

  componentWillMount () {
    var { dispatch, nextRoundNum } = this.props;
    if (nextRoundNum !== undefined) {
      console.log("Next round:", nextRoundNum);
      dispatch(setRoundNum(nextRoundNum));
    };
  }


    // console.log("Tips componentWillMount...");
    // var { round } = this.props;
    // var gamesRef = firebaseRef.child(`/games`);
    //
    // gamesRef.on('value', snap => {
    //
    //   // return snap.val();
    //   var games = snap.val() || {};
    //   // console.log("snap.val() games:", snap.val());
    //   var parsedGames = [];
    //
    //   Object.keys(games).forEach( (gameId) => {
    //     parsedGames.push({
    //       id: gameId,
    //       // parsedRoundScores,
    //       ...games[gameId]
    //     });
    //   });

      // console.log("games (parsed from Firebase):", parsedGames);
      // update the component state with received game data
      // this.setState({games: parsedGames});
      // update the Redux state with received game data
      // dispatch(updateGames(parsedGames));
    // });

    // var tipsRef = firebaseRef.child(`/tips/`);
    // tipsRef.on('value', snap => {
    //
    //   var tips = snap.val() || {};
    //   console.log("tipSnap.val() tips:", snap.val());
    //   var parsedTips = [];
    //   Object.keys(tips).forEach( (uid) => {
    //     parsedTips.push({
    //       uid: uid,
    //       // parsedRoundScores,
    //       ...tips[uid]
    //     });
    //   });
    //   console.log("tips (parsed from Firebase):", parsedTips);
    //   this.setState({tips: parsedTips});
    //
    // });

  // handleGamePanelClick (teamId) {
  //   console.log("Game panel clicked...Setting result to:", teamId);
  // }

  listUsers () {
    var { users, user, admin } = this.props;
    this.leaderboard=[];

    //var filterPlayers = FTipsAPI.filterGames(games, round);

    if (users.length === 0) {
      return (
        <div>
          <p className="container__message">No Players</p>
        </div>
      )
    }
    var userClass = "";
    // return <p>listUsers</p>

    return users.map( (aUser, index) => {
      // console.log("User:", user.name);
      // return (
      //   <GamePanel key={game.id} admin={admin} {...game} />
      // )
      // console.log("User IDs:", aUser.id + " : " + user.uid);
      if (aUser.id === user.uid) {
        if (admin) {
          userClass = 'adminClass'

        }
        else userClass = "userClass";
      }
      else userClass = "";
      // this.leaderboard.push({
      //   uid: aUser.id,
      //   roundscoreTotal: 0
      // });
      // console.log("Local leaderboard:", this.leaderboard);
      // this.setState({leaderboard: leaderboard})
      return (
        <div key={index} className={'tipsTeamItem '+ userClass}>
          {aUser.name}
        </div>
      )
    });
  }

  getUserTipPanels (game) {
    // console.log("getUserTipPanels...");
    var { users, Rtips } = this.props;

    //var filterPlayers = FTipsAPI.filterGames(games, round);

    if (users.length === 0) {
      return (
        <div>
          <p>No Players</p>
        </div>
      )
    }

    // return <p>listUsers</p>
    // var leaderboard = [];
    return users.map( (user, index) => {
      // console.log("User:", user.name);
      // return (
      //   <GamePanel key={game.id} admin={admin} {...game} />
      // )

      // var atipId = 6;
      // var aTip = {
      //   tip_team_id: atipId
      // }
      // var aTip = getTip(this.state.tips, game.id, user.id);
      var aTip = getTip(Rtips, game.id, user.id);


      // console.log("Getting tip using userid:", user.id + " gameid:", game.id + "tip:", aTip);
      // console.log("User:", user.id + ", game id:", game.id + ", result:", game.result_team_id + ", tip:", aTip.tip_team_id);
      if ((game.result_team_id !== undefined) && (game.result_team_id === aTip.tip_team_id)) {

        // console.log("Correct tip for user:", user.id + " total for round", round);


        // console.log("userid index:",this.leaderboard.indexOf(user.id, index));
        // var aUserElement = this.leaderboard.find( (element) => {
        //   console.log("element.uid:", element.uid + " user.id", user.id);
        //   return element.uid === user.id;
        // });

        // var foundIndex = this.leaderboard.findIndex( (element) => {
        //   // console.log("element.uid:", element.uid + " user.id", user.id);
        //   return element.uid === user.id;
        // });
        // console.log("foundIndex:", foundIndex);
        // this.leaderboard[foundIndex].roundscoreTotal += 1;
        //   id: user.id,
        //   roundscores: roundscores + 1
        // });
        // var currentObject = this.leaderboard[aUserElement];
        // aUserElement.roundscoreTotal =+ 1;
        // console.log("Local leaderboard current object:", aUserElement);
        // console.log(" id:", aUserElement.uid + " roundscore:", aUserElement.roundscoreTotal);
        // console.log("Local leaderboard:", this.leaderboard);

      }
      // console.log("leaderboard:", leaderboard[index].roundscores);

      return (
        <TipsUserTipPanel key={index} user={user} game={game} tip={aTip}/>
      )
    });

  }

  getTipCountPanel () {

    var { round, games, Rtips, users } = this.props;

    var filteredGames = filterGames(games, round);
    // console.log("filteredGames:", filteredGames);

    var resultsReady = filteredGames.find( (element) => {
        return element.result_team_id !== undefined;
    });
    // console.log("are resultsReady:", resultsReady);

    if ( filteredGames && Rtips && users && resultsReady ) {
      var roundLeaderboard = getTipTotals(filteredGames, Rtips, users);
      // console.log("roundLeaderboard:", roundLeaderboard);

      if (roundLeaderboard.length === 0) {
        return (
          <div>
            <p className="container__message">No Tips</p>
          </div>
        )
      };


      var tipData = roundLeaderboard.map( (item, index) => {
          return item.totalTips;
      });
      // console.log("TipData:", tipData);

      return (
          <TipsDataPanel data={tipData}/>
      );
      // });
    }
    else return null;


  }

  getGamePanels () {
    var { round, games, admin, Rtips, users } = this.props;

    // console.log("getGamePanels... round:", round);
    var filteredGames = filterGames(games, round);
    // console.log("filteredGames:", filteredGames);

    if (filteredGames.length === 0) {
      return (
        <div>
          <p className="container__message">No Games</p>
        </div>
      )
    };

    // return <p>listUsers</p>
    return filteredGames.map( (game, index) => {
      // console.log("Game id:", game.id);
      // return (
      //   <GamePanel key={game.id} admin={admin} {...game} />
      // )
      return (
      <div key={game.id} className='tipsPanel'>
        <TipsGamePanel game={game} admin={admin} games={filteredGames} tips={Rtips} users={users}/>
        <div className='tipsEditPanel'>
        {this.getUserTipPanels(game)}
        </div>

      </div>
    )

    });
  } // end -- getGamePanels

  render () {
    // {this.listUsers()}

    return (
      <div>
        {/* <h2>Tips Admin</h2> */}
        <RoundSelector />
        <RoundSelectMob />

        <div className='tipsPanel'>
          <div className='tipsGamePanel'>
            <div className='tipsTeamItem tipsGameIcon'>

            </div>
            <div className='tipsDetails'>

            </div>
            <div className='tipsTeamItem tipsGameIcon'>

            </div>

          </div>
          <div className="tipsEditPanel">
            {this.listUsers()}
          </div>

        </div>
        <div>
          {this.getTipCountPanel()}
        </div>

        <div>
          {this.getGamePanels()}
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      round: state.roundNum,
      nextRoundNum: state.nextRoundNum,
      users: state.leaderboard,
      games: state.games,
      user: state.user,
      admin: state.auth.admin,
      Rtips: state.tips
    };
    //return state;
  }

)(Tips);
