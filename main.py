import json

from pycee.answers import get_answers
from pycee.errors import handle_error
from pycee.utils import parse_args, remove_cache, return_answers_for_web
from pycee.control import get_error_info_from_traceback


def create_JSON(so_answers: list, links: list, error_info: dict):
    """
    Change the data format of solutions and their links to JSON
    :return: JSON
    """
    data_set = {
        "items": []
    }

    for i in range(0, len(so_answers), 1):

        ans = ""
        ans += "\n\n**{}**\n\n**Solution {}:**\n\n".format('=' * 40 ,i + 1)

        for a in so_answers[i]:
            ans += str(a)

        ans += "\n"
        # ans = markdown.markdown(ans)
        ans = ans.replace("<p>",  '<p style="font-size:18px;">')

        link = '<p><b>\nLink: <a href="{}">{}</a>\n\n\n</b></p>'.format(links[i], links[i])
        link = link.replace("<p>",  '<p style="font-size:18px;">')


        data = {
            "body": ans,
            "link_text": link,
            "link": links[i],
            "error_type": error_info["type"],
            # "score": get_updownvote(link , error_info["type"]),
        }
        data_set["items"].append(data)

    return json.dumps(data_set)


def main(error:str, code:str):

    error_info = get_error_info_from_traceback(error, code)
    args = parse_args(args=[error_info['file']])
    if args.rm_cache: #? 
        remove_cache()
    query = handle_error(error_info, args)
    stackoverflow_answers, _, links = get_answers(query, error_info, args)
    solution = return_answers_for_web(stackoverflow_answers, links, args)
    # return create_JSON(stackoverflow_answers, links, error_info)
    return solution


        


if __name__ == "__main__":

    _traceback = """ File "/home/negin/Desktop/pycee2_aria/Pycee-2.0-main/test_code.py", line 1\n
    def some_function()\n
                       ^\n
SyntaxError: invalid syntax"""

    _code = """def some_function()\n
    msg = 'hello, world!\n
    print(msg)\n
    return msg\n
"""
    main(_traceback, _code)
    # print(solution)
    