// import MonitoringDock from "src/views/gudang/MonitoringDock"

const initialState = {
  sidebarShow: true,
  isLoading: false,
  otoritas_id: 'null',
  readyAssign: false,
  scheduleTap: {
    uid:''
  },
  securityEvaluate: {
    // readyAssign:'',
    // loading_transaction_id:'',
  },
  submitKelayakan:false,
  noCloseModal:true,
  waitingPrinter: false,

  //notif toas
  notifToas: false,
  dataToas: {
    title: '',
    body: ''
  },
}

const changeState = (state = initialState, { type, val, ...rest }) => {
  switch (type) {
    case 'set':
      return {...state, ...rest }
     case 'LOADING':
       return {
         ...state,
         isLoading: val
       }
      case 'CHANGE_OTORITAS':
        return {
          ...state,
          otoritas_id: val
        }

      // case gate in gate out
      case 'READY_ASSIGN':
        return {
          ...state,
          readyAssign: val
        }

      case 'TAP_KTP':
        return {
          ...state,
          scheduleTap: val
        }

      case 'SECURITY_EVALUATE':
        return {
          ...state,
          securityEvaluate: val
        }

      case 'CHANGE_PRINTER':
        return {
          ...state,
          waitingPrinter: val,
        }
      case 'CHANGE_MODAL':
        return {
          ...state,
          noCloseModal: val,
        }
      case 'CHECK_SUBMIT_KELAYAKAN':
        return {
          ...state,
          submitKelayakan: val,
        }
      // end case case gate in gate out

      // case notification
      case 'TOAS_NOTIF':
        return {
          ...state,
          notifToas: val
        }
      case 'DATA_TOAS':
        return {
          ...state,
          dataToas: val
        }
      case 'MONITORING_DOCK':
        return {
          ...state,
          monitoringDock: val
        }

    default:
      return state
  }
}

export default changeState
