import React from 'react';
import Card from '../card/card.jsx';
import './form.css';

class CardForm extends React.Component {
  constructor() {
    super();
    this.state = {
      card: 'front'
    };
    this.handleChange = this.handleChange.bind(this);
    this.numbersOnly = this.numbersOnly.bind(this);
    this.makeActive = this.makeActive.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.flipCard = this.flipCard.bind(this);
  }

  componentDidMount() {
    let months = document.getElementById('monthSelector');
    let years = document.getElementById('yearSelector');

    for (let monthNum = 1; monthNum <= 12; monthNum++) {
      if (monthNum < 10) monthNum = '0' + monthNum.toString();
      let option = document.createElement('option');
      option.value = monthNum;
      option.text = monthNum;
      months.add(option);
    }

    for (let yearNum = 2019; yearNum <= 2030; yearNum++) {
      let option = document.createElement('option');
      option.value = yearNum.toString().slice(2);
      option.text = yearNum;
      years.add(option);
    }
  }

  formSubmit(e) {
    e.preventDefault();
    window.alert('Wow, cool card!');
  }

  flipCard(e) {
    let elements = Array.from(document.getElementsByClassName('text'));
    let backEle = document.getElementById('backText');
    let card = document.getElementsByClassName('cardSectionOverall')[0];
    let card2 = document.getElementsByClassName('flip-card')[0];

    if (!e.target.id) {
    } else if (e.target.id === 'cvv') {
      elements.forEach(ele => {
        ele.style.visibility = 'hidden';
      });

      card.classList.add('flip');
      card2.classList.add('flip');

      setTimeout(function() {
        backEle.style.visibility = 'visible';
      }, 500);
    } else {
      setTimeout(function() {
        elements.forEach(ele => {
          ele.style.visibility = 'visible';
        });
      }, 500);

      card.classList.remove('flip');
      card2.classList.remove('flip');
      backEle.style.visibility = 'hidden';
    }
  }

  makeActive(e) {
    this.flipCard(e);
    let actives = Array.from(document.getElementsByClassName('active'));

    if (actives.length > 0) {
      actives.forEach(ele => {
        ele.classList.remove('active');
      });
    }

    let element = document.getElementsByClassName(
      e.target.classList + 'Card'
    )[0];

    if (element) {
      element.classList.add('active');
    }
  }

  numbersOnly(e) {
    let element = e.target;
    let regex = /[^0-9]/gi;
    element.value = element.value.replace(regex, '');
  }

  handleChange(e) {
    let key = e.target.id;
    let value = e.target.value;
    let split;

    switch (key) {
      case 'firstInput':
        split = value.split('');
        this.setState({
          one: split[0],
          two: split[1],
          three: split[2],
          four: split[3]
        });
        break;
      case 'secondInput':
        split = value.split('');
        this.setState({
          five: split[0],
          six: split[1],
          seven: split[2],
          eight: split[3]
        });
        break;
      case 'thirdInput':
        split = value.split('');
        this.setState({
          nine: split[0],
          ten: split[1],
          eleven: split[2],
          twelve: split[3]
        });
        break;
      case 'fourthInput':
        split = value.split('');
        this.setState({
          thirteen: split[0],
          fourteen: split[1],
          fifteen: split[2],
          sixteen: split[3]
        });
        break;
      case 'cvv':
        split = value.split('');
        this.setState({
          cvv1: split[0],
          cvv2: split[1],
          cvv3: split[2]
        });
        break;
      default:
        this.setState({
          [key]: value
        });
    }
  }

  render() {
    return (
      <div onClick={this.makeActive}>
        <Card info={this.state} />
        <form
          className='cardForm'
          autoComplete='off'
          onSubmit={this.formSubmit}
        >
          <div className='formContent'>
            <div className='cardNumberSection'>
              <label className='numberLabel'>Number</label>
              <div className='cardNumbers'>
                <input
                  type='text'
                  className='numberInput'
                  name=''
                  id='firstInput'
                  maxlength='4'
                  onKeyPress={this.numbersOnly}
                  onChange={this.handleChange}
                  onClick={this.makeActive}
                />
                <input
                  type='text'
                  className='numberInput'
                  name=''
                  id='secondInput'
                  maxlength='4'
                  onKeyPress={this.numbersOnly}
                  onChange={this.handleChange}
                  onClick={this.makeActive}
                />
                <input
                  type='text'
                  className='numberInput'
                  name=''
                  id='thirdInput'
                  maxlength='4'
                  onKeyPress={this.numbersOnly}
                  onChange={this.handleChange}
                  onClick={this.makeActive}
                />
                <input
                  type='text'
                  className='numberInput'
                  name=''
                  id='fourthInput'
                  maxlength='4'
                  onKeyPress={this.numbersOnly}
                  onChange={this.handleChange}
                  onClick={this.makeActive}
                />
              </div>
            </div>
            <div className='cardHolderSection'>
              <label className='cardHolderLabel'>Cardholder</label>
              <input
                type='text'
                className='cardHolder'
                name=''
                id='cardHolder'
                maxlength='28'
                onChange={this.handleChange}
                onClick={this.makeActive}
              />
            </div>
            <div className='selectorSection'>
              <div className='expireSection'>
                <label className='expireLabel'>Expiration Date</label>
                <div className='expireItems'>
                  <select
                    name=''
                    id='monthSelector'
                    className='expirationSection'
                    onChange={this.handleChange}
                    onClick={this.makeActive}
                  >
                    <option value='MM' selected disabled>
                      Month
                    </option>
                  </select>

                  <select
                    name=''
                    id='yearSelector'
                    className='expirationSection'
                    onChange={this.handleChange}
                    onClick={this.makeActive}
                  >
                    <option value='YY' selected disabled>
                      Year
                    </option>
                  </select>
                </div>
              </div>

              <div className='cvvSection'>
                <label className='cvvLabel'>CVV</label>
                <input
                  type='text'
                  className='cvv'
                  name=''
                  id='cvv'
                  maxlength='3'
                  onChange={this.handleChange}
                  onKeyPress={this.numbersOnly}
                  onClick={this.makeActive}
                />
              </div>
            </div>
            <button className='submitButton'>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CardForm;
