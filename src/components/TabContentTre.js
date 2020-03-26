import React from "react";
import { Button } from "./Button";
import { Icon } from "react-icons-kit";
import { cross } from "react-icons-kit/icomoon/cross";
import { checkmark } from "react-icons-kit/icomoon/checkmark";
import "../css/TabsNav.css";

function TabContentTre() {
  return (
    <div>
      <div className='main-tab3'>
        <div className='main-top-tab3'>
          <h3 className='toptab3'>
            Choose one plan and start to watch and have fun{" "}
          </h3>
          <Button style={{ margin: "auto" }} className='btntaptop3'>
            Try it now
          </Button>
        </div>
        <div className='top-bottom-content'>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Basic</th>
                <th>Standart</th>
                <th>Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Montly price</td>
                <td>9.99€</td>
                <td>13.99€</td>
                <td>16.99€</td>
              </tr>
              <tr>
                <td>HD Available</td>
                <td>
                  <Icon icon={cross} size={10} />
                </td>
                <td>
                  {" "}
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>
              <tr>
                <td>Ultra HD Available</td>
                <td>
                  <Icon icon={cross} size={10} />
                </td>
                <td>
                  {" "}
                  <Icon icon={cross} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>
              <tr>
                <td>Screens you can watch at the same time</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Unlimited movies and TV Shows</td>
                <td>
                  <Icon icon={cross} size={10} />
                </td>
                <td>
                  {" "}
                  <Icon icon={cross} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>
              <tr>
                <td>Only Netflix and Sky</td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  {" "}
                  <Icon icon={cross} size={10} />
                </td>
                <td>
                  <Icon icon={cross} size={10} />
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  All services and Neftlix, Sky,Amazon Prime Video, Infinity
                </td>
                <td>
                  <Icon icon={cross} size={10} />
                </td>
                <td>
                  {" "}
                  <Icon icon={cross} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TabContentTre;
