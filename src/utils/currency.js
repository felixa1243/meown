export function formatCurrency(subject) {
    const rupiah = subject.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    return `Rp. ${rupiah}`;
}
