const paths = {
    creator: {
        root: '/create',
        poll: (id: string) => ({
            root: `/create/${id}`,
            newQuestion: `/create/${id}/new`
        }),
    },
    poll: (id: string) => `/poll/${id}`,
    home: '/home'
}

export default paths