import React, {PropTypes} from 'react';
import Layout from '../../components/Layout';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NewPost.css';
import ApiNovaPochta from 'yz-react-deliveri-newpochta'
import config from '../../components/ApiNovaPochta/config';

class NewPost extends React.Component {

  constructor(props) {
    super();
    this.Api = new ApiNovaPochta;
    this.state = {
      listCities: [],
      listCitiesCurrent: [],
      selectCity: null,
      selectCityVal: '',
      listWarehouses: [],
      selectWarehousVal: null,
      listAreas: [],
      selectArea: null,
      selectAreaVal: ''
    };
    this.cbCities = this.cbCities.bind(this);
    this.cbWarehouse = this.cbWarehouse.bind(this);
    this.cbAreas = this.cbAreas.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeWarehous = this.onChangeWarehous.bind(this);
    this.onChangeArea = this.onChangeArea.bind(this);
    this.getCitiesOfArea = this.getCitiesOfArea.bind(this);
  }

  componentDidMount() {
    this.Api.getAreas(this.cbAreas, config.apiKey);
  }

  shouldComponentUpdate() {
    if(!this.state.selectArea) {
      console.log('should: Not selectArea', this.state);
      return false; }
    else if(!this.state.selectCity) {
      console.log('should: Not selectCities', this.state);
      return false; }
    else return true;
  }

  cbAreas(result) {
    console.log('data Areas', result.data);
    let res = [];
    result.data.forEach((item)=> {
      res.push({
        Description: item.Description,
        Ref: item.Ref,
        AreasCenter: item.AreasCenter
      });
    });
    if(res.length>0) {
      this.setState({
        listAreas: res,
        selectAreaVal: '1',
        selectArea: res[1],
        listWarehouses: []
      });
      this.Api.getCities(this.cbCities, config.apiKey);
    }
  }

  cbCities(result) {
    let res = [];
    result.data.forEach((item)=> {
      res.push({
        Description: item.Description,
        DescriptionRu: item.DescriptionRu,
        Ref: item.Ref,
        Area: item.Area
      });
    });

    if(res.length>0) {
      let selectCities = this.getCitiesOfArea(res, this.state.selectArea);
      this.setState({
        listCities: res,
        listCitiesCurrent: selectCities,
        selectCity: selectCities[0],
        selectCityVal: '0'
      });

      if(this.state.selectArea) {
        this.Api.getWarehouses(
          this.cbWarehouse, config.apiKey, { "CityName": this.getCitiesOfArea(res, this.state.selectArea)[0].Description });
      }
    }
  }

  getCitiesOfArea(listCities, area) {
    return listCities.filter((i) => area.Ref === i.Area)
  }

  cbWarehouse(result) {
    console.log('data Warehouse', result.data);
    let res = [];
    result.data.forEach((item)=> {
      res.push(item.Description);
    });
    this.setState({ listWarehouses: res });
  }

  onChangeArea(e) {
    let value = e.target.value;
    console.log('onChangeArea', value);
    let selectArea = this.state.listAreas[parseInt(value)];
    let selectCity = this.getCitiesOfArea(this.state.listCities, selectArea);
    this.setState({
      selectArea: selectArea,
      selectAreaVal: value,
      listCitiesCurrent: selectCity,
      selectCity: selectCity[0],
      selectCityVal: '0',
      selectWarehousVal: '0'
    });
    this.Api.getWarehouses(
      this.cbWarehouse,
      config.apiKey,
      { "CityName": selectCity[0].Description });

  }

  onChangeCity(e) {
    let value = e.target.value;
    console.log('onChangeCity', value);
    this.setState({
      selectCity: this.state.listCitiesCurrent[parseInt(value)],
      selectCityVal: value,
      selectWarehousVal: '0'

    });
    this.Api.getWarehouses(
      this.cbWarehouse,
      config.apiKey,
      { "CityName": this.state.listCitiesCurrent[parseInt(value)].Description });
  }

  onChangeWarehous(e) {
    console.log(e.target.value);
    this.setState({ selectWarehousVal: e.target.value });
  }

  render() {
    console.log('render');
    let selectArea = this.state.selectArea;
    return (
      <Layout>
        <div className={s.container}>

          <select className={s.select}
                  onChange={ this.onChangeArea }
                  value={this.state.selectAreaVal}
          >
            { this.state.listAreas.map((i, ind) => ( <option  value={ind} key={ind}>{i.Description}</option> )) }
          </select>

          <select className={s.select}
                  onChange={ this.onChangeCity }
                  value={this.state.selectCityVal}
         >
            {
              this.state.listCitiesCurrent.map((i, ind) => ( <option value={ind} key={ind}>{i.Description}</option> )) }
          </select>

          <select className={s.select}
                  onChange={ this.onChangeWarehous }
          >
            { this.state.listWarehouses.map((i, ind) => ( <option value={ind} key={ind}>{i}</option> )) }
          </select>
        </div>
      </Layout>
    )
  }
}

NewPost.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withStyles(s)(NewPost);
