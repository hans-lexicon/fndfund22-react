namespace WebApi.Models
{
    public class Product
    {
        public int Id { get; set; }                 // [id, setId] = useState(0)
        public string Name { get; set; }            // [name, setName] = useState("")
        public string Description { get; set; }     // [description, setDescription] = useState("")
        public decimal Price { get; set; }          // [price, setPrice] = useState(0.0)
    }
}
