

import "./UserItem.css"

function UserItem({ list}) {
    return (
        <div className="UserItem">
            <h1 style={{color:"#ffc107"}}>name:{list.name}</h1>
           <h2>username: {list.username}</h2>
           <p>email: {list.email}</p>
           <p>street: {list.address.street}</p>
           <p>suite: {list.address.suite}</p>
           <p>city: {list.address.city}</p>
           <p>zipcode:{list.address.zipcode}</p>
           {/* <p>lat:{list.geo.lat}</p>
           <p>lng:{list.geo.lng}</p> */}
           <p>phone: {list.phone}</p>
           <p>website: {list.website}</p>
           <p>company: {list.company.name}</p>
           <p>catchPhrase: {list.company.catchPhrase}</p>
           <p>bs:{list.company.bs}</p>
            
           
        </div>
    );
}

export default UserItem;