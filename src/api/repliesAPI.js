import axios from "axios"

// 여기까지만 하면 댓글처리 끝
export const getRepliesOfBoard = async (bno, page = 1, last = false) => { // bno, page = 1, last = false 기본값임

  const res = await axios.get(`http://localhost:8080/api/replies/${bno}/list?page=${page}&last=${last}`)

  return res.data

}

export const postReply = async (reply) => {

  const res = await axios.post('http://localhost:8080/api/replies/' , reply)

  return res.data

}

export const getReply = async (rno) => {

  const res = await axios.get(`http://localhost:8080/api/replies/${rno}`)

  return res.data

}

export const deleteReply = async (rno) => {

  const res = await axios.delete(`http://localhost:8080/api/replies/${rno}`)

  return res.data
}

export const putReply = async (reply) => {

  const res = await axios.put(`http://localhost:8080/api/replies/${reply.rno}`, reply)

  return res.data

}