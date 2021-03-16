import moment from 'moment'

export const formatDate = (date) => {
    return (
        moment(new Date(date)).format('DD-MM-YYYY')
    )
}

export const formatWaktu = (time) => {
    return (
        moment(new Date(time)).format('HH:mm:ss')
    )
}