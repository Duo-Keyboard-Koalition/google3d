from django.shortcuts import render
import plotly.express as px
import pandas as pd

def chart_view(request):
    # Example data for the chart
    df = pd.DataFrame({
        "Fruit": ["Apples", "Oranges", "Bananas"],
        "Amount": [10, 15, 7]
    })

    # Create a Plotly figure
    fig = px.bar(df, x="Fruit", y="Amount", title="Fruit Amounts")

    # Convert the figure to HTML
    graph_html = fig.to_html(full_html=False, include_plotlyjs='cdn')

    return render(request, 'home/charts.html', {'graph_html': graph_html})