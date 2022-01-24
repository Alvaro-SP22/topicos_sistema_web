const selectLetter = (size, variant) => {
  switch (variant) {
    case 0: {
      switch (size) {
        case "small": {
          return "subtitle2";
        }
        case "medium": {
          return "subtitle1";
        }
        case "big": {
          return "body1";
        }
        default: {
          return "subtitle2";
        }
      }
    }
    case 1: {
      switch (size) {
        case "small": {
          return "subtitle2";
        }
        case "medium": {
          return "subtitle1";
        }
        case "big": {
          return "h4";
        }
        default: {
          return "subtitle2";
        }
      }
    }
    case 2: {
      switch (size) {
        case "small": {
          return "h4";
        }
        case "medium": {
          return "h3";
        }
        case "big": {
          return "h2";
        }
        default: {
          return "subtitle2";
        }
      }
    }
    case 3: {
      switch (size) {
        case "small": {
          return "h6";
        }
        case "medium": {
          return "h5";
        }
        case "big": {
          return "h4";
        }
        default: {
          return "subtitle2";
        }
      }
    }
    case 4: {
      switch (size) {
        case "small": {
          return "caption";
        }
        case "medium": {
          return "subtitle2";
        }
        case "big": {
          return "subtitle1";
        }
        default: {
          return "caption";
        }
      }
    }
    default: {
      switch (size) {
        case "small": {
          return "subtitle2";
        }
        case "medium": {
          return "subtitle1";
        }
        case "big": {
          return "h4";
        }
        default: {
          return "subtitle2";
        }
      }
    }
  }
};

export default selectLetter;
