const React = require("react");
const {forwardRef} = require("react");
const styled = require("styled-components");

const Button = forwardRef((props, ref) => <ButtonAntCss ref={ref} {...props} />);

const ButtonAntCss = styled.button`
  background: red;
  color: white;
`;

const Test = (value) => value === "ynriver-1.0.2";

module.exports = {Test, Button};

// TODO: Install antd.
// TODO: BTN.
// TODO: ANCHOR.
// TODO: INPUT.
// TODO: React theme from json.

// TODO: useTranslation.
// TODO: useSendError.
// TODO: useFetch.
// TODO: useAuth.

// TODO: Transpile before to publish.
