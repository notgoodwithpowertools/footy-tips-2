import { firebaseRef } from '../api/firebase/index.js';

export var setTip = (userId, gameId, tipTeamId) => {

  console.log("setTip...User ID:", userId + " Game ID:", gameId + " tip team ID:", tipTeamId);
  if (tipTeamId === undefined) {
    firebaseRef.child(`tips/${userId}/tips/${gameId}`).remove();
  }
  else {
    firebaseRef.child(`tips/${userId}/tips/${gameId}`).set(tipTeamId);
  }

}

export var getTip = (tips, aGameId, aUserId) => {

  // console.log("getTip...tips:", tips);
  // console.log("IsArray:", Array.isArray(tips));

  var tipsAvailable = Array.isArray(tips);
  var atipId = undefined;

  if (tipsAvailable) {

    var aTipElement = tips.find( (element) => {
      return element.uid === aUserId;
    });

    if (aTipElement !== undefined) {
      atipId = aTipElement.tips[aGameId];
    }

  }

  var aTip = {
    tip_team_id: atipId
  }

  return (aTip);

}
