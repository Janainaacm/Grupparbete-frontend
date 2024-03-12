import axios from 'axios'


function App() {
const URL = "https://sti-java-grupp5-wjfjet.reky.se"

const fetchAllRecipes() = async () => {

    const response = await axios.get('${URL}/recipes')


}
}