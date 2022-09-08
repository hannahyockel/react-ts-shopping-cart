// undefined is the locale so wherever you live you will see the currency in your location's format
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {currency: "USD", style: "currency", })

export function formatCurrency(number: number) {
    return CURRENCY_FORMATTER.format(number)
}