import { useState, useEffect } from "react";
import ConfigurationMenuElement from "./ConfigurationMenuElement";
import { doFetch } from "../../helpers/fetchers";
export default function ConfigurationMenu() {
  const [settings, saveSettings] = useState(null);
  const setSettings = async () => {
    const url = "/settings/user/set",
      method = "POST",
      body = JSON.stringify({settings}),
      result = doFetch(url, method, body);
      if(result){

      }
  };
  return (
    <div>
      <ul>
        <ConfigurationMenuElement setSettings={setSettings} />
      </ul>
    </div>
  );
}
