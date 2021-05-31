import styled from 'styled-components'

type MenuProps = {
  americano: boolean
  latte: boolean
  cappuccino: boolean
  macchiato: boolean
  mocha: boolean
  flatwhite: boolean
  vienna: boolean
  espresso: boolean
}

export const RecipeContainer = styled.div<MenuProps>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.BackC};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  overflow: hidden;

  --main-bg-color: ${({ theme }) => theme.color.WhiteC};
  --cup-color: #6e6b68;
  --cup-width: 24vw;
  --cup-height: 19vw;
  --cup-handle-width: 5vw;
  --cup-handle-height: 13vh;
  --cup-border-width: 2vw;
  --cup-inside-width: calc(var(--cup-width) - var(--cup-border-width));
  --cup-inside-height: calc(var(--cup-height) - var(--cup-border-width));
  --border-width: 1vw;
  --main-border: var(--border-width) solid var(--cup-color);
  --plate-width: 19vw;
  --plate-height: 1.5vw;
  --coffee-bottom: 0;
  --water-bottom: 0;
  --steamed_milk-bottom: 0;
  --milk_foam-bottom: 0;
  --whipped_cream-bottom: 0;
  --chocolate-bottom: 0;
  --coffee-color: #574739;
  --water-color: #e8f9f9;
  --steamed_milk-color: #fcfcf6;
  --milk_foam-color: #fbf6e6;
  --whipped_cream-color: #f0f0f0;
  --chocolate-color: #625452;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70vw;
    height: 50vh;
  }

  .coffee_name {
    text-align: center;
    color: ${({ theme }) => theme.color.StrongBrownC};
    font-size: 3.5rem;
    margin-top: -100px;
  }

  .options {
    display: flex;
    margin-top: -90px;

    & > button {
      user-select: none;
      outline: none;
      color: ${({ theme }) => theme.color.WhiteC};
      background-color: rgba(11, 66, 26, 0.45);
      width: 10vw;
      height: 6vh;
      padding: 15px;
      font-size: 1.2rem;
      box-shadow: none;
      box-sizing: border-box;
      border: none;

      &#americano {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }

      &#espresso {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    }

    & > button:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.color.PointC};
      font-weight: 600;
      border-width: 3px;
    }
  }

  .cup {
    width: var(--cup-width);
    height: var(--cup-height);
    border-radius: 1vw 1vw 11vw 11vw;
    position: relative;
    background-color: var(--cup-color);
    z-index: 10;
    box-sizing: border-box;
    margin-top: 50px;
  }

  .cup::after {
    content: '';
    position: absolute;
    top: 18%;
    left: calc(100% - 1vw);
    width: var(--cup-handle-width);
    height: var(--cup-handle-height);
    border: var(--main-border);
    border-radius: 40% 35% 70% 40%;
  }

  .plate {
    position: absolute;
    top: calc(100% + 1vw);
    left: calc((var(--cup-width) - var(--plate-width)) / 2);
    width: var(--plate-width);
    height: var(--plate-height);
    background: var(--cup-color);
    border-top-left-radius: 1.5vw;
    border-top-right-radius: 1.5vw;
    border-bottom-left-radius: 0.5vw;
    border-bottom-right-radius: 0.5vw;
  }

  .filling {
    position: absolute;
    left: calc(var(--cup-border-width) / 2);
    bottom: calc(var(--cup-border-width) / 2);
    width: var(--cup-inside-width);
    height: var(--cup-inside-height);
    border-radius: 0 0 10vw 10vw;
    background-color: var(--main-bg-color);
    bottom: 1vw;
    overflow: hidden;
  }

  .filling div {
    position: absolute;
    width: 100%;
    transition: all 1s linear;
    color: #817f75;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 10px;
    height: 0;
    font-size: 1.7rem;
    height: 100%;
    bottom: -100%;
    box-sizing: border-box;
    overflow: hidden;

    --coffee-bottom: ${({
      americano,
      latte,
      cappuccino,
      macchiato,
      mocha,
      flatwhite,
      vienna,
      espresso,
    }) => {
      if (americano) {
        return '-60%'
      } else if (latte || macchiato || vienna || mocha || espresso) {
        return '-70%'
      } else if (cappuccino || flatwhite) {
        return '-65%'
      } else {
        return '-100%'
      }
    }};

    --water-bottom: ${({ americano }) => {
      if (americano) {
        return '0%'
      } else {
        return '-100%'
      }
    }};

    --steamed_milk-bottom: ${({ latte, cappuccino, mocha, flatwhite }) => {
      if (flatwhite) {
        return '0%'
      } else if (latte || mocha) {
        return '-20%'
      } else if (cappuccino) {
        return '-35%'
      } else {
        return '-100%'
      }
    }};

    --milk_foam-bottom: ${({ latte, cappuccino, macchiato }) => {
      if (latte || cappuccino || macchiato) {
        return '0%'
      } else {
        return '-100%'
      }
    }};

    --whipped_cream-bottom: ${({ mocha, vienna }) => {
      if (mocha || vienna) {
        return '0%'
      } else {
        return '-100%'
      }
    }};

    --chocolate-bottom: ${({ mocha }) => {
      if (mocha) {
        return '-50%'
      } else {
        return '-100%'
      }
    }};
  }

  div.whipped_cream {
    background: var(--whipped_cream-color);
    bottom: var(--whipped_cream-bottom);
    z-index: 1;
  }

  div.milk_foam {
    background: var(--milk_foam-color);
    bottom: var(--milk_foam-bottom);
    z-index: 1;
  }

  div.water {
    background: var(--water-color);
    bottom: var(--water-bottom);
    z-index: 2;
  }

  div.steamed_milk {
    background: var(--steamed_milk-color);
    bottom: var(--steamed_milk-bottom);
    z-index: 3;
  }

  div.chocolate {
    background: var(--chocolate-color);
    bottom: var(--chocolate-bottom);
    z-index: 4;
  }

  div.coffee {
    background: var(--coffee-color);
    bottom: var(--coffee-bottom);
    line-height: 4vw;
    z-index: 5;
  }

  .filling.reset {
    --coffee-bottom: -100%;
    --water-bottom: -100%;
    --milk-bottom: -100%;
    --steamed_milk-bottom: -100%;
    --milk_foam-bottom: -100%;
    --whipped_cream-bottom: -100%;
    --chocolate-bottom: -100%;
    --ice_cream-bottom: -100%;
  }
`

export default RecipeContainer
