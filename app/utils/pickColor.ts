const BAR_COLORS = ["#5FA29C", "#70B8B1", "#7CC3BC", "#90D4CD", "#A6E0D9", "#C3EFEA"];

export function pickColor(key: string) {
    let h = 0;
    for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) | 0;
    return BAR_COLORS[Math.abs(h) % BAR_COLORS.length];
}
