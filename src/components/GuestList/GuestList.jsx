import axios from 'axios';

function GuestList({guestList, getGuests}){

  const RemoveGuest = (event) => {
    event.preventDefault();
    let clickedButton = event.target;
    let theTableRow = clickedButton.closest('tr');
    let guestID = Number(theTableRow.getAttribute('data-id'));

    axios.delete(`/guests/${guestID}`)
    .then(response => {
      console.log('this is the response from the delete axios:', response);
      getGuests()
    }).catch((error) => {
      console.log(error);
    })
}

return(
<>
<h2>Guest List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Kid's Meal</th>
            <th>Remove Guest</th>
          </tr>
        </thead>
        <tbody>
          {guestList.map(guest => (
            <tr key={guest.id} data-id={guest.id}>
              <td>{guest.name}</td>
              <td>{String(guest.kidsMeal)}</td>
              <td><button onClick={RemoveGuest}>❌</button></td>
            </tr>
          ))}
        </tbody>
      </table>
</>
)
}

export default GuestList;