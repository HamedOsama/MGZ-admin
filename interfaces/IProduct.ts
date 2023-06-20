interface IProduct {
  _id : string
  name : string
  images : string[]
  sellPrice : number
  category : string
  description ?: string
  brand ?: string
  quantity : number
  rate ?: number
  properties ?: any[]
  availableQuantity ?: number
}
export default IProduct;