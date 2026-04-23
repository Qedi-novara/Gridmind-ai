export default function handler(req, res) {
  res.status(200).json({
    harare: 500 + Math.random() * 50,
    bulawayo: 300 + Math.random() * 30,
    mutare: 180 + Math.random() * 20
  });
}
