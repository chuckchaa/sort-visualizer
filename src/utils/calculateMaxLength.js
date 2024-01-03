export function calculateMaxLength() {
  const query = `(max-width: 700px)`
  return window.matchMedia(query).matches ? 60 : 180
}
