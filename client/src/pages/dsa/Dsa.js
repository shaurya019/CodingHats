import React from "react";
import { Link } from "react-router-dom";
import { changeSelect } from "../../context/sidebarContext/SidebarAction";
import "./dsa.css";

class dsa extends React.Component {
  componentDidMount() {
    const { SidebarDispatch } = this.props;
    SidebarDispatch(changeSelect("dsa"));
  }
  render() {
    return (
      <div className="section-1">
        <div className="container">
          <div className="row">
            {/* dsa heading */}
            <div className="Dsa-head">
              <h2>DSA Revision</h2>
            </div>
            {/* dsa blocks */}
            <div className="dsa-blocks">
              {/* dsa quaters it represents a single block*/}

              {/* quaters - 1  */}
              <Link to="/dsa/1" className="link">
                <div className="quaters">
                  <h2>
                    <p>Day-1</p>
                  </h2>
                  {/* dsa-day it will have links */}
                  <div className="dsa-day"></div>
                </div>
              </Link>
              {/* quaters - 2  */}
              <Link to="/dsa/2" className="link">
                <div className="quaters">
                  <h2>
                    <p>Day-2</p>
                  </h2>
                  {/* dsa-day it will have links */}
                  <div className="dsa-day"></div>
                </div>
              </Link>
              {/* quaters - 3  */}
              <Link to="/dsa/3" className="link">
                <div className="quaters">
                  <h2>
                    <p>Day-3</p>
                  </h2>
                  {/* dsa-day it will have links */}
                  <div className="dsa-day"></div>
                </div>
              </Link>
              {/* quaters - 4  */}
              <Link to="/dsa/4" className="link">
                <div className="quaters">
                  <h2>
                    <p>Day-4</p>
                  </h2>
                  {/* dsa-day it will have links */}
                  <div className="dsa-day"></div>
                </div>
              </Link>

              {/* quaters - 5  */}
              <Link to="/dsa/5" className="link">
                <div className="quaters">
                  <h2>
                    <p>Day-5</p>
                  </h2>
                  {/* dsa-day it will have links */}
                  <div className="dsa-day"></div>
                </div>
              </Link>
              {/* quaters - 6  */}
              <Link to="/dsa/6" className="link">
                <div className="quaters">
                  <h2>
                    <p>Day-6</p>
                  </h2>
                  {/* dsa-day it will have links */}
                  <div className="dsa-day"></div>
                </div>
              </Link>

              {/* quaters - 7  */}
              <Link to="/dsa/6" className="link">
              <div className="quaters">
                <h2>
                  <p>Day-7</p>
                </h2>
                {/* dsa-day it will have links */}
                <div className="dsa-day"></div>
              </div>
              </Link>
              {/* quaters - 8  */}
              <Link to="/dsa/7" className="link">
              <div className="quaters">
                <h2>
                  <p>Day-8</p>
                </h2>
                {/* dsa-day it will have links */}
                <div className="dsa-day"></div>
              </div>
              </Link>
              {/* quaters - 9  */}
              <Link to="/dsa/9" className="link">
              <div className="quaters">
                <h2>
                  <p>Day-9</p>
                </h2>
                {/* dsa-day it will have links */}
                <div className="dsa-day"></div>
              </div>
              </Link>
              {/* quaters - 10  */}
              <Link to="/dsa/10" className="link">
              <div className="quaters">
                <h2>
                  <p>Day-10</p>
                </h2>
                {/* dsa-day it will have links */}
                <div className="dsa-day"></div>
              </div>
              </Link>
              {/* quaters - 11  */}
              <Link to="/dsa/11" className="link">
              <div className="quaters">
                <h2>
                  <p>Day-11</p>
                </h2>
                {/* dsa-day it will have links */}
                <div className="dsa-day"></div>
              </div>
              </Link>
              {/* quaters - 12 */}
              <Link to="/dsa/12" className="link">
              <div className="quaters">
                <h2>
                  <p>Day-12</p>
                </h2>
                {/* dsa-day it will have links */}
                <div className="dsa-day"></div>
              </div>
              </Link>
              {/* quaters - 13 */}
              <Link to="/dsa/13" className="link">
              <div className="quaters">
                <h2>
                  <p>Day-13</p>
                </h2>
                {/* dsa-day it will have links */}
                <div className="dsa-day"></div>
              </div>
              </Link>
              {/* quaters - 14  */}
              <Link to="/dsa/14" className="link">
              <div className="quaters">
                <h2>
                  <p>Day-14</p>
                </h2>
                {/* dsa-day it will have links */}
                <div className="dsa-day"></div>
              </div>
              </Link>
              {/* quaters - 15  */}
              <Link to="/dsa/15" className="link">
              <div className="quaters">
                <h2>
                  <p>Day-15</p>
                </h2>
                {/* dsa-day it will have links */}
                <div className="dsa-day"></div>
              </div>
              </Link>
              {/* quaters - 16  */}
              <Link to="/dsa/16" className="link">
              <div className="quaters">
                <h2>
                  <p>Day-16</p>
                </h2>
                {/* dsa-day it will have links */}
                <div className="dsa-day"></div>
              </div>
              </Link>
              {/* quaters - 17  */}
              <Link to="/dsa/17" className="link">
              <div className="quaters">
                <h2>
                  <p>Day-17</p>
                </h2>
                {/* dsa-day it will have links */}
                <div className="dsa-day"></div>
              </div>
              </Link>
              {/* quaters - 18  */}
              <Link to="/dsa/18" className="link">
              <div className="quaters">
                <h2>
                  <p>Day-18</p>
                </h2>
                {/* dsa-day it will have links */}
                <div className="dsa-day"></div>
              </div>
              </Link>
              {/* quaters - 19  */}
              <Link to="/dsa/19" className="link">
              <div className="quaters">
                <h2>
                  <p>Day-19</p>
                </h2>
                {/* dsa-day it will have links */}
                <div className="dsa-day"></div>
              </div>
              </Link>
              {/* quaters - 20  */}
              <Link to="/dsa/20" className="link">
              <div className="quaters">
                <h2>
                  <p>Day-20</p>
                </h2>
                {/* dsa-day it will have links */}
                <div className="dsa-day"></div>
              </div>
              </Link>
              {/* quaters - 21  */}
              <Link to="/dsa/21" className="link">
              <div className="quaters">
                <h2>
                  <p>Day-21</p>
                </h2>
                {/* dsa-day it will have links */}
                <div className="dsa-day"></div>
              </div>
              </Link>
              {/* quaters - 22  */}
              <Link to="/dsa/22" className="link">
              <div className="quaters">
                <h2>
                  <p>Day-22</p>
                </h2>
                {/* dsa-day it will have links */}
                <div className="dsa-day"></div>
              </div>
              </Link>
              {/* quaters - 23  */}
              <Link to="/dsa/23" className="link">
              <div className="quaters">
                <h2>
                  <p>Day-23</p>
                </h2>
                {/* dsa-day it will have links */}
                <div className="dsa-day"></div>
              </div>
              </Link>
              {/* quaters - 24  */}
              <Link to="/dsa/24" className="link">
              <div className="quaters">
                <h2>
                  <p>Day-24</p>
                </h2>
                {/* dsa-day it will have links */}
                <div className="dsa-day"></div>
              </div>
              </Link>
              {/* quaters - 25  */}
              <Link to="/dsa/25" className="link">
              <div className="quaters">
                <h2>
                  <p>Day-25</p>
                </h2>
                {/* dsa-day it will have links */}
                <div className="dsa-day"></div>
              </div>
              </Link>
              {/* quaters - 26  */}
              <Link to="/dsa/26" className="link">
              <div className="quaters">
                <h2>
                  <p>Day-26</p>
                </h2>
                {/* dsa-day it will have links */}
                <div className="dsa-day"></div>
              </div>
              </Link>
              {/* quaters - 27  */}
              <Link to="/dsa/27" className="link">
              <div className="quaters">
                <h2>
                  <p>Day-27</p>
                </h2>
                {/* dsa-day it will have links */}
                <div className="dsa-day"></div>
              </div>
              </Link>
              {/* quaters - 28  */}
              <Link to="/dsa/28" className="link">
              <div className="quaters">
                <h2>
                  <p>Day-28</p>
                </h2>
                {/* dsa-day it will have links */}
                <div className="dsa-day"></div>
              </div>
              </Link>
              {/* quaters - 29  */}
              <Link to="/dsa/29" className="link">
              <div className="quaters">
                <h2>
                  <p>Day-29</p>
                </h2>
                {/* dsa-day it will have links */}
                <div className="dsa-day"></div>
              </div>
              </Link>
              {/* quaters - 30  */}
              <Link to="/dsa/30" className="link">
                <div className="quaters">
                  <h2>
                    <p>Day-30</p>
                  </h2>
                  {/* dsa-day it will have links */}
                  <div className="dsa-day"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default dsa;
