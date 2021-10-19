import { parseMillisecondsIntoReadableTime } from "helpers/helpers";
import React, { useState, useEffect } from "react";
import Button from "../../atoms/Button/Button";
import { TableWrapper } from "./Table.styles";

export default function Table({ data, type, headers, actions, start, end }) {
  const [tableData, setTableData] = useState(data);
  useEffect(() => {
    setTableData(data);
    return () => {};
  }, [data]);
  const create = () => {
    try {
      let thead = [
          <thead>
            <tr key="table_tr_1">
              {headers.map((header, index) => {
                return <th key={`th_${index}`}>{header}</th>;
              })}
            </tr>
          </thead>,
        ],
        table = [];
      switch (type) {
        case "users-settings":
          Object.values(tableData).map(
            ({ login, name, surname, email, role }, index) => {
              table.push(
                <tr>
                  <td key={`${login}_${index}`}>{login}</td>
                  <td key={`${name}_${index}`}>{name}</td>
                  <td key={`${surname}_${index}`}>{surname}</td>
                  <td key={`${email}_${index}`}>{email}</td>
                  <td key={`${role}_${index}`}>{role}</td>
                  <td>
                    <Button
                      className="--normal"
                      onClick={() => actions.editUser(login)}>
                      Edytuj
                    </Button>
                    <Button
                      className="--error"
                      onClick={() => actions.removeUser(login)}>
                      Usuń
                    </Button>
                  </td>
                </tr>
              );
              return true;
            }
          );
          break;
        case "users-statistics":
          Object.values(data).map(({ login, name, surname }) => {
            table.push(
              <tr
                onClick={() => {
                  actions.getStatistics(login);
                  actions.setBeltText(login);
                }}>
                <td key={name}>{name}</td>
                <td key={surname}>{surname}</td>
              </tr>
            );
            return true;
          });
          break;
        case "machine-statistics":
          Object.values(data)
            .filter((data) => {
              return data.data.time > 0 && data.data.show;
            })
            .map((data, index) => {
              table.push(
                <tr key={`row_${data.options.className}`}>
                  <td
                    key={`cell_X${index}_${data.options.className}`}
                    className={data.options.className}>
                    {data.options.displayName}
                  </td>
                  <td
                    key={`cell_Y${index}_${data.options.className}`}
                    className={data.options.className}>
                    {parseMillisecondsIntoReadableTime(data.data.time)}
                  </td>
                  <td
                    key={`cell_Z${index}_${data.options.className}`}
                    className={
                      data.options.className
                    }>{`${data.data.percentage}%`}</td>
                </tr>
              );
              return true;
            });

          break;
        case "machine-sender-access":
          Object.values(tableData).map(
            ({
              login,
              machinesAccess: {
                sender: { daily, monthly },
              },
            }) => {
              table.push(
                <tr>
                  <td key={login}>{login}</td>
                  <td>{daily}</td>
                  <td>{monthly}</td>
                  <td>
                    <Button
                      className="--success"
                      onClick={() => {
                        actions.sendPerformanceReport(login, "daily");
                      }}>
                      Wyślij dzienny
                    </Button>
                    <Button
                      className="--success"
                      onClick={() => {
                        actions.sendPerformanceReport(login, "monthly");
                      }}>
                      Wyślij miesięczny
                    </Button>
                  </td>
                </tr>
              );
              return true;
            }
          );
          break;
        default:
          break;
      }

      return (
        <div className="table__container">
          {start
            ? `${new Date(start).toLocaleDateString()} ${new Date(
                start
              ).toLocaleTimeString()}-${new Date(
                end
              ).toLocaleDateString()} ${new Date(end).toLocaleTimeString()}`
            : null}
          <TableWrapper>
            {thead}
            <tbody>{table}</tbody>
          </TableWrapper>
        </div>
      );
    } catch (error) {
      console.log(`Table create error ${error}`);
    }
  };
  return create();
}
