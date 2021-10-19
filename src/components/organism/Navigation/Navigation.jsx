import React, { useState, useEffect } from "react";
import { AsideWrapper, NavigationWrapper } from "./Navigation.styles";
import {
  faHome,
  faWarehouse,
  faTasks,
  faChartBar,
  faCogs,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import NavigationElement from "components/molecules/NavigationElement/NavigationElement";
import { useFetch } from "hooks/useFetch";
export default function Nagivation() {
  const [menu, setMenu] = useState([]);
  const { doFetch } = useFetch();
  const getMenuPermissions = async () => {
    try {
      const url = `/permissions/menu`,
        method = "GET",
        result = await doFetch(url, method);
      if (result.success) {
        return result.menu;
      }
    } catch (error) {
      console.log(`Aside get menu permissions error ${error}`);
    }
  };
  useEffect(() => {
    (async () => {
      setMenu(await getMenuPermissions());
    })();

    return () => {
      setMenu([]);
    };
  }, []);
  return (
    <NavigationWrapper className="aside__container">
      <AsideWrapper>
        <nav className="navigation__container">
          <ul>
            {menu
              ? menu.map((menuElement) => {
                  switch (menuElement) {
                    case "Dashboard":
                      return (
                        <NavigationElement
                          key={menuElement}
                          to="/"
                          icon={faHome}>
                          Dashboard
                        </NavigationElement>
                      );
                    case "Monitoring":
                      return (
                        <NavigationElement
                          key={menuElement}
                          to="/analitycs"
                          icon={faWarehouse}>
                          Analityk
                        </NavigationElement>
                      );
                    case "Operator":
                      return (
                        <NavigationElement
                          key={menuElement}
                          to="/operator"
                          icon={faUserShield}>
                          Operator
                        </NavigationElement>
                      );
                    // case "Tasks":
                    //   return (
                    //     <NavigationElement
                    //       key={menuElement}
                    //       to="/tasks"
                    //       icon={faTasks}>
                    //       Zadania
                    //     </NavigationElement>
                    //   );
                    case "Statistics":
                      return (
                        <NavigationElement
                          key={menuElement}
                          to="/statistics"
                          icon={faChartBar}>
                          Statystyki
                        </NavigationElement>
                      );
                    case "Settings":
                      return (
                        <NavigationElement
                          key={menuElement}
                          to="/settings"
                          icon={faCogs}>
                          Ustawienia
                        </NavigationElement>
                      );
                    default:
                      break;
                  }
                  return true;
                })
              : null}
          </ul>
        </nav>
      </AsideWrapper>
    </NavigationWrapper>
  );
}
