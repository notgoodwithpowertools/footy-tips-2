
import ade_img from '../images/ade.jpg';
import bri_img from '../images/bri.jpg';
import car_img from '../images/car.jpg';
import col_img from '../images/col.jpg';
import ess_img from '../images/ess.jpg';
import fre_img from '../images/fre.jpg';
import gcs_img from '../images/gcs.jpg';
import gee_img from '../images/gee.jpg';
import gws_img from '../images/gws.jpg';
import haw_img from '../images/haw.jpg';
import mel_img from '../images/mel.jpg';
import nth_img from '../images/nth.jpg';
import pta_img from '../images/pta.jpg';
import ric_img from '../images/ric.jpg';
import stk_img from '../images/stk.jpg';
import syd_img from '../images/syd.jpg';
import wbu_img from '../images/wbu.jpg';
import wce_img from '../images/wce.jpg';

export var getTeam = (id) => {

  switch (id) {
    case 0: return {
      name: 'Adelaide',
      img: ade_img,
      nickname: 'Crows',
      sname: 'ADE'
    };
    case 1: return {
      name: 'Brisbane',
      img: bri_img,
      nickname: 'Lions',
      sname: 'BRI'
    };
    case 2: return {
      name: 'Carlton',
      img: car_img,
      nickname: 'Blues',
      sname: 'CAR'
    };
    case 3: return {
      name: 'Collingwood',
      img: col_img,
      nickname: 'Pies',
      sname: 'COL'
    };
    case 4: return {
      name: 'Essendon',
      img: ess_img,
      nickname: 'Bombers',
      sname: 'ESS'
    };
    case 5: return {
      name: 'Fremantle',
      img: fre_img,
      nickname: 'Dockers',
      sname: 'FRE'
    };
    case 6: return {
      name: 'Geelong',
      img: gee_img,
      nickname: 'Cats',
      sname: 'GEE'
    };
    case 7: return {
      name: 'Gold Coast',
      img: gcs_img,
      nickname: 'Suns',
      sname: 'GCS'
    };
    case 8: return {
      name: 'Western Sydney',
      img: gws_img,
      nickname: 'Giants',
      sname: 'GWS'
    };
    case 9: return {
      name: 'Hawthorn',
      img: haw_img,
      nickname: 'Hawks',
      sname: 'HAW'
    };
    case 10: return {
      name: 'Melbourne',
      img: mel_img,
      nickname: 'Demons',
      sname: 'MEL'
    };
    case 11: return {
      name: 'North Melbourne',
      img: nth_img,
      nickname: 'Roos',
      sname: 'NTH'
    };
    case 12: return {
      name: 'Port Adelaide',
      img: pta_img,
      nickname: 'Power',
      sname: 'PTA'
    };
    case 13: return {
      name: 'Richmond',
      img: ric_img,
      nickname: 'Tigers',
      sname: 'RIC'
    };
    case 14: return {
      name: 'St Kilda',
      img: stk_img,
      nickname: 'Saints',
      sname: 'STK'
    };
    case 15: return {
      name: 'Sydney',
      img: syd_img,
      nickname: 'Swans',
      sname: 'SYD'
    };
    case 16: return {
      name: 'West Coast',
      img: wce_img,
      nickname: 'Eagles',
      sname: 'WCE'
    };
    case 17: return {
      name: 'Western Bulldogs',
      img: wbu_img,
      nickname: 'Dogs',
      sname: 'WBU'
    };

    default: return {
      name: 'Collingwood',
      img: col_img,
      nickname: 'Pies',
      sname: 'COL'
    };

  }

}
