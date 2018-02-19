import '../assets/styles/footer.less'

export default {
    data() {
        return {
            author: 'zhangtian'
        }
    },
    render() {
        return (
            <div id='footer'>
                <span>written by {this.author}</span>
            </div>
        )
    }
}