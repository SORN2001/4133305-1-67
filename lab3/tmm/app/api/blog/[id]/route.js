export function GET(request, { params }){
    return Response.json({
        name: "Sorn",
        major: "IT",
        lv: "3",
        id: params.id
    });
}