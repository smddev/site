const validator = (input) => {
    if (input?.trim().length > 0) return true;
    return false
}

export default validator