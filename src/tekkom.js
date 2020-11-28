import React, { Component} from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { Card, Col, Row } from 'antd';

const { Meta } = Card;




export default class tekkom extends Component {
    constructor(props) {

        super(props);
        this.state = {
            tekkom: [],
            visible: false,
            name: "",
            address: "",
            region: "",
        };
    }

    handleButton = (name) => {
        alert(name);
    };
    handleTambahOrang = () => {
        this.setState({
            visible: true,
        });
    };
    handleNama = (e) => {
        this.setState({
            name: e.target.value,
        });
        console.log(this.state.name);
    };
    handleNim = (e) => {
        this.setState({
            address: e.target.value,
        });
        console.log(this.state.address);
    };
    handleAsal = (e) => {

        this.setState({
            region: e.target.value,
        });
        console.log(this.state.region);
    };

    componentDidMount() {
        axios({
            method: "get",
            url: "https://www.breakingbadapi.com/api/characters",
            headers: {
                accept: "*/*",
            },
        })
            .then((data) => {
                console.log(data.data); 
                this.setState({
                    tekkom: data.data,
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
                        <h1>BREAKING BAD CHARACTER</h1>
                    </center>
                    <div className="site-card-wrapper container">
                    <Row gutter={16}>

                    {this.state.tekkom.map((results, index) => {

                        return (
                              <Col span={4}>
                              <Card
                                hoverable
                                shadow={4} 
                                style={{ minWidth: '300', margin: 'auto' }}
                                cover={
                                <img
                                    alt="example"
                                    src= {results.img}
                                />
                                }
                                actions={[
                                <p>{results.nickname}</p>,
                                <p>{results.status}</p>,
                                ]}
                              >
                                <Meta
                                title={results.name}
                                style={{textAlign: 'center'}}
                                />
                              </Card>
                              </Col>
                        );
                    })}
                    </Row>
                    </div>
                </div>
            </div>
        );
    }
}