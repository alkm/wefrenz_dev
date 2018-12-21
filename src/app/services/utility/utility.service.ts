let isInvokeWindow : boolean =  false;
export class UtilityService {
    static getPicDimension(dimension: any) {
        let width = dimension.split('x')[0];
        let height = dimension.split('x')[1];
        return {'dimension': {'width': width, 'height': height}};
    }

    static getPicPosition(position: any) {
        let x = position.split('x')[0];
        let y = position.split('x')[1];
        return {'position': {'x': x, 'y': y}};
    }

    static setSmileys(msg: any) {
        return msg
        .replace(/:\)/gi,"<span><img src='/assets/images/smileys/socialutility-emotion0-smile.gif'></img></span>")
        .replace(/:\(/gi,"<span><img src='/assets/images/smileys/socialutility-emotion1-sadsmile.gif'></img></span>")
        .replace(/B=\)/gi,"<span><img src='/assets/images/smileys/socialutility-emotion3-cool.gif'></img></span>")
        .replace(/:\D/,"<span><img src='/assets/images/smileys/socialutility-emotion2-bigsmile.gif'></img></span>")
        .replace(/B=\)/,"<span><img src='/assets/images/smileys/socialutility-emotion3-cool.gif'></img></span>")
        .replace(/:\=\O/,"<span><img src='/assets/images/smileys/socialutility-emotion4-surprised.gif'></img></span>")
        .replace(/;\)/,"<span><img src='/assets/images/smileys/socialutility-emotion5-wink.gif'></img></span>")
        .replace(/;\(/,"<span><img src='/assets/images/smileys/socialutility-emotion6-crying.gif'></img></span>");
    }

    static setWindowInvocation(state){
        isInvokeWindow = state; 
    }

    static getWindowInvocation(){
        return isInvokeWindow; 
    }
}
