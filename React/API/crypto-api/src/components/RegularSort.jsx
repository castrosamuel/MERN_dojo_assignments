import React, {useState} from 'react'

const RegularSort = () => {

const [allCoins, setAllCoins] = useState([])


const clickHandler = () => {
    console.log("clicked")
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then(res=>{
        console.log("the response look like this")
        console.log(res)
        return res.json()
    }) // means when the respoonce is recieved back sucessfully from the api call, what to do with it.
    .then(res=>{
        console.log(res)
        res.sort(function (a,b) {
        return b.current_price - a.current_price;
        });
        setAllCoins(res)
        //save the response into my state varible
    })
    .catch(err=>{
        console.log(err)
    }) // means if there were any errors that came up in our api request, this is where we will handle those errors.
}

return(
    <div>
<button onClick={clickHandler} className="btn btn-success">Show me the money</button>
    {
        allCoins.map((coin,idx)=>{
        return <div style={{backgroundColor:"grey"}} key={idx} className="card">
            <div className="card-body">
            <div className="card-title">
                {coin.name}
            </div>
            <div className="card-text">
                <p>Current price: $ {coin.current_price}</p>
            </div>
            </div>
        </div>
        })
    }
    </div>
)

}

export default RegularSort;