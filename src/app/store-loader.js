/* Manual Store loader for Persistent State Management

Acknowledgements: 
https://blog.bitsrc.io/5-methods-to-persisting-state-between-page-reloads-in-react-8fc9abd3fa2f
https://stackoverflow.com/questions/36580963/can-you-or-should-you-use-localstorage-in-reduxs-initial-state
*/

const loadItem = (itemName) => {
    // uncomment this line if you need to flush all data
    // localStorage.clear();

    const local = JSON.parse(localStorage.getItem(itemName));
    return local ? local : {};
}
export default loadItem;