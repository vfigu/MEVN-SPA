let users = {
  username: { type: String, required: true, index: {unique: true} },
  password: { type: String, required: true },
  url: String,
  date_created: {
    type: Date,
    default: Date.now
  }
}
export default {
  data () {
    return users
  }
}
