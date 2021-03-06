const _ = require('lodash');

const INITIAL_STATE = {
  wcaEvent: "333",
  voiceType: "Male",
  svgScale: 2,
  inspection: {
    useInspection: false,
    eightSeconds: false,
    twelveSeconds: false,
    inspectionBegins: false
  }
}

const settings = (state = INITIAL_STATE, action) => {
  const validActions = new Set(["SET_WCA_EVENT", "SET_VOICE_TYPE", "SET_SVG_SCALE", "SET_INSPECTION"]);

  if (action.type === "SET_SETTINGS") {
    return action.settings;
  } else if (validActions.has(action.type)) {
    const propertyName = _.camelCase(action.type.slice("SET_".length));
    return {...state, [propertyName]: action[propertyName]};
  }
  return state
};

export default settings;
