import React, {useState} from 'react'
import axios from 'axios'
const AxiosSort = () => {

const [allCoins, setAllCoins] = useState([])


const clickHandler = () => {
    console.log("clicked")
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then(res=>{
        console.log(res)
        res.data.sort(function (a,b) {
        return b.current_price - a.current_price;
        });
        setAllCoins(res.data)
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

export default AxiosSort;