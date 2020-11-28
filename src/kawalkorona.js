import React, { Component } from "react";
import axios from "axios";
import { Modal } from "antd";
import "antd/dist/antd.css";

export default class kawalkorona extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kawalkorona: [],
      visible: false,
      Negara: "",
      Terkonfirmasi: "",
      Meninggal: "",
      Sembuh: "",
      url : "https://api.kawalcorona.com/",
      Negaraku : ''
    };
  }
 
  handleButton = (nama) => {
    alert(nama);
  };
  handleTambahOrang = () => {
    this.setState({
      visible: true,
    });
  };
  handleNama = (e) => {
    this.setState({
      nama: e.target.value,
    });
    console.log(this.state.nama);
  };
  handleNim = (e) => {
    this.setState({
      nim: e.target.value,
    });
    console.log(this.state.nim);
  };
  handleAsal = (e) => {
    this.setState({
      asal: e.target.value,
    });
    console.log(this.state.asal);
  };
  handleSubmit = () => {
    if (
      this.state.nama !== "" &&
      this.state.nim !== "" &&
      !this.state.asal !== ""
    ) {
      axios({
        method: "post",
        url: this.state.url + "/add",
        headers: {
          accept: "*/*",
        },
        data: {
          nama: this.state.nama,
          nim: this.state.nim,
          asal: this.state.asal,
        },
      })
        .then((data) => {
          alert("berhasil menambahkan");
          window.location.reload();
        })
        .catch((error) => {
          alert("gagal lur");
        });
    } else {
      alert("pastikan semua kolom terisi");
    }
  };
  componentDidMount() {
    axios({
      method: "get",
      url:  this.state.url + "/all",
      headers: {
        accept: "*/*",
      },
    })
      .then((data) => {
        console.log(data.data);
        this.setState({
          tekkom: data.data,
          namaku : data.data[91].nama,
          asalku: data.data[91].asal
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
 
  render() {
    return (
      <div>
        <div className="boxWhite">
          <center>
            <h1>List Anak Tekkom 2017</h1>
          </center>
          <center>
            <button onClick={this.handleTambahOrang}>Tambah orang</button>
          </center>
          <p>Saya : {this.state.namaku} Dari {this.state.asalku}</p>
          <Modal
            title="Tambah Orang Bosque"
            centered
            visible={this.state.visible}
            onOk={this.handleSubmit}
            onCancel={() => this.setState({ visible: false })}
            width={500}
          >
            <div style={{ textAlign: "center" }}>
              <p>Nama : </p>{" "}
              <input
                type="text"
                placeholder="nama"
                onChange={this.handleNama}
              />
              <br />
              <p>Nim : </p>{" "}
              <input type="text" placeholder="nim" onChange={this.handleNim} />
              <br />
              <p>Asal : </p>{" "}
              <input
                type="text"
                placeholder="asal"
                onChange={this.handleAsal}
              />
              <br />
            </div>
          </Modal>
 
          {this.state.tekkom.map((results, index) => {
            return (
              <div className="card" key={results.nama}>
                <div className="card-body">
                  <h5 className="card-title">Nama : {results.nama}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Nim : {results.nim}
                  </h6>
                  <p className="card-text">Asal : {results.asal}</p>
                </div>
                <button style={{backgroundColor:'red'}}
                  className="button"
                  onClick={() => this.handleButton(results.nim)}
                >
                  {" "}
                  klik aku
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}