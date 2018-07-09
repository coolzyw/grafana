from flask import json
from flask import Response

@app.route('/summary')
def summary():
    data = {name:'Mary'}

    response = Response(
        response=json.dumps(data),
        status=200,
        mimetype='application/json'
    )

    return response