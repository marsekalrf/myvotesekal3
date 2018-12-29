import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getVoter } from '../../_actions/voteAction'

class LandingPage extends Component {
	constructor(props){
		super(props);

		this.state = {
			voters : []
    };

    this.onTerserah = this.onTerserah.bind(this);
  }

  onTerserah(){
    console.log("CLICKED")
  }

	componentWillMount(){
		if(this.state.voters == null ){
			this.setState({voters: this.state.voters.concat(this.props.voters)})
			console.log(this.state.voters)
		}
	}

  render() {
  	const voters = this.props
  	console.log(voters)
    return (
    	<div>
      <section id="home" class="home bg-black fix">
        <div class="overlay"></div>
        <div class="container">
        <div class="row">
        <div class="main_home">
        <div class="col-md-12">
        <div class="hello_slid">
        <div class="slid_item xs-text-center">
        <div class="col-sm-4">
        <img src="../images/hello-phone.png" alt="" />
        </div>
        <div class="col-sm-8">
        <div class="home_text xs-m-top-30">
        <h1 class="text-white">SEMUA ORANG PUNYA PRIVASI</h1>
        </div>
        <a onClick={this.onTerserah} class="btn btn-primary m-top-20"><b>Start</b></a>
        </div>
        </div>
        </div>

        </div>
        </div>
        </div>
        </div>


        </section>

        <section id="features" class="features">
        <div class="container">
        <div class="row">
        <div class="main_features fix roomy-70">
        <h2 align="center"><b>KENAPA PAKAI KITA ?</b></h2>
        <div class="main_features fix roomy-70">
        <div class="col-md-4">
        <div class="features_item sm-m-top-30">
        <div class="f_item_text">
        <h3>Terdistribusi</h3>
        <p>Menggungakan aplikasi Decentralized Applica
					tion (DApp) yang dijalankan pada jaringan block
					chain yang terdesentralisasi. Pada penelitian
					DApp yang dimaksud adalah eVoting, yang
					akan berinteraksi langsung dengan end-user.</p>
        </div>
        </div>
        </div>
        <div class="col-md-4">
        <div class="features_item sm-m-top-30">

        <div class="f_item_text">
        <h3>Transparansi</h3>
        <p>Sistem Blockchain dengan sendiri nya me
					ngawasi setiap pilihan suara yang dilaku
					kan setiap warga sehingga tidak akan terjadi
					kecurangan.</p>
        </div>
        </div>
        </div>
        <div class="col-md-4">
        <div class="features_item sm-m-top-30">

        <div class="f_item_text">
        <h3>Rekapitulasi Suara</h3>
        <p>Pembeda sistem blockchain e-voting dan sist
					em e-voting biasa yaitu. Semua orang yang
					terdapat pada jaringan blockchain e-voting d
					apat melakukan audit suara tanpa.</p>
        </div>
        </div>
        </div>
        </div>
      </div>


        </div>
        </div>
        </section>

      <section id="business" class="business bg-blue roomy-70">
      <div class="business_overlay"></div>
      <div class="container">
      <div class="row">
      <div class="main_business">
      <div class="col-md-5">
      <div class="business_item sm-m-top-50">
      <h2 class="text-uppercase text-white"><strong>CARA </strong>PAKAI</h2>

      <p class="m-top-20 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque eleifend in mi
                                    sit amet mattis suspendisse ac ligula volutpat nisl rhoncus sagittis cras suscipit .</p>

      <ul class="text-white">
      <li><i class="fa fa-arrow-circle-right"></i> Pemilih </li>
      <li><i class="fa  fa-arrow-circle-right"></i> Atorasi </li>
      <li><i class="fa  fa-arrow-circle-right"></i> Token dst</li>
      </ul>

      </div>
      </div>

      <div class="col-md-7">
      <div class="business_item">
      <div class="business_img">
      <img src="../images/howtouse.png" alt="" />
      </div>
      </div>
      </div>

      </div>
      </div>
      </div>
      </section>


      <section id="features" class="features">
      <div class="container">
      <div class="row">

      <div class="main_features fix roomy-70">
      <h2 align="center"><b>sPONSOR KAMI</b></h2>
      <div class="main_features fix roomy-70">
      <div class="col-md-7">
      <div class="features_item sm-m-top-30">
      <div class="f_item_text">
      <img align="center" src="../images/dinustek-img.png" alt="" />
      </div>
      </div>
      </div>
      <div class="col-md-5">
      <div class="features_item sm-m-top-30">
      <div class="f_item_text">
      <img align="center" src="../images/udinus-img.png" alt="" />
      </div>
      </div>
      </div>
      </div>
    </div>

      </div>
    </div>

    </section>



      </div>
    )
  }
}

const mapStateToProps = state => ({
	gfdfgdfgdgfdgfdgfdgf : state.voter
})

export default connect(mapStateToProps, {getVoter})(LandingPage)
