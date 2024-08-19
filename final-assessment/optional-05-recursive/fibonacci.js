function fibonacci(n) {
  let sequence = [0];
  if (n === 0) return sequence;

  sequence.push(1);
  for (let i = 2; i <= n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
