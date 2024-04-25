import pandas as pd

def calculate_scores(movies_data):
    df = pd.DataFrame(movies_data)
    if not df.empty and all(col in df.columns for col in ['vote_average', 'vote_count']):
        C = df['vote_average'].mean()
        m = df['vote_count'].quantile(0.9)
        df['score'] = df.apply(lambda x: (x['vote_count'] / (x['vote_count'] + m) * x['vote_average']) + 
                                           (m / (x['vote_count'] + m) * C), axis=1)
        return df.sort_values('score', ascending=False)
    return pd.DataFrame()  # Return an empty DataFrame if input is empty or columns are missing

def get_top_movies(movies_data, n=10):
    scored_df = calculate_scores(movies_data)
    if not scored_df.empty and all(col in scored_df.columns for col in ['title', 'vote_count', 'vote_average', 'score']):
        return scored_df[['title', 'vote_count', 'vote_average', 'score']].head(n)
    return pd.DataFrame(columns=['title', 'vote_count', 'vote_average', 'score'])  # Return empty DataFrame with specified columns if not present
