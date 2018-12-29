import React from 'react';
import {Link} from 'react-router-dom';
// import Transaction from '../../Transaction';

class DetailTransaction extends React.Component {
    constructor(props){
     super(props);
     this.state = {
        accounts : []
     }
    }

  render(){
    console.log(this.state.accounts.slice())
    return(
      <section id="detail-transaction">
              <head>
                  <meta charset="utf-8"/>
                  <title>Transaction Table</title>
              </head>
              <body>

                  <div class="container roomy-150">
                    <h1 class="main_product"><b>Transaction</b>= $apr1$12345678187rfiabrw8fg44</h1>
                      <div class="table-responsive roomy-20">
                          <table class="table table-mc-blue">
                                <tbody>
                                  <tr>
                                      <td data-title="Tx Hash">Tx Hash</td>
                                      <td data-title="Detail">= $apr1$12345678187rfiabrw8fg44</td>
                                  </tr>
                                  <tr>
                                      <td data-title="Tx Hash Status">Tx Hash Status</td>
                                      <td data-title="Tx Hash Status">= Success</td>
                                  </tr>
                                  <tr>
                                      <td data-title="Block Height" color="#3f92d1">Block Height</td>
                                      <td data-title="Block Height" color="#3f92d1">= 2345632</td>
                                  </tr>
                                  <tr>
                                      <td data-title="Time Stamp">Time Stamp</td>
                                      <td data-title="Time Stamp">= 24 sec ago 24 Nov 2018 (10:10:10 AM)</td>
                                  </tr>
                                  <tr>
                                      <td data-title="From">From</td>
                                      <td data-title="From">= s756rfdhg75g85n876f4h7</td>
                                  </tr>
                                  <tr>
                                      <td data-title="To">To</td>
                                      <td data-title="To">= 9s7f8h56d3fs87hfdgbh</td>
                                  </tr>
                                  <tr>
                                      <td data-title="Name">Name</td>
                                      <td data-title="Name">= Marsekal Risnur Farros</td>
                                  </tr>
                                  <tr>
                                      <td data-title="Date of Birth">Date of Birth</td>
                                      <td data-title="Date of Birth">= 24-02-1945</td
                                  </tr>
                                  <tr>
                                      <td data-title="Place of Birth">Place of Birth</td>
                                      <td data-title="Place of Birth">= Mecca</td>
                                  </tr>
                                  <tr>
                                      <td data-title="Identity Number">Identity Number</td>
                                      <td data-title="Identity Number">= 33912498212</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
              </body>
            </section>
    )
  }
}

export default DetailTransaction
