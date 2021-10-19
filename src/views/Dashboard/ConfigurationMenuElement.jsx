export default function ConfigurationMenuElement(props) {
  return (
    <li>
      <input type="checkbox" onClick={props.setSettings} />
      {props.settingsName}
    </li>
  );
}
